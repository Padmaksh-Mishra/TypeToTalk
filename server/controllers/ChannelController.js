import mongoose from "mongoose";
import { z } from "zod";
import Channel from "../models/ChannelModel.js";
import User from "../models/UserModel.js";

// Validation Schemas
const createChannelSchema = z.object({
    name: z.string().min(1, "Name is required"),
    members: z.array(z.string().length(24, "Invalid member ID")),
});

const getChannelMessagesSchema = z.object({
    channelId: z.string().length(24, "Invalid channel ID"),
});

export const createChannel = async (request, response, next) => {
    try {
        // Validate request body
        const { name, members } = createChannelSchema.parse(request.body);
        
        const userId = request.userId;
        const admin = await User.findById(userId);
        if (!admin) {
            return response.status(400).send("Admin user not found");
        }

        const validMembers = await User.find({ _id: { $in: members } });
        if (validMembers.length !== members.length) {
            return response.status(400).send("Some members are not valid users");
        }

        const newChannel = new Channel({
            name,
            members,
            admin: userId,
        });

        await newChannel.save();
        return response.status(201).json({ channel: newChannel });
    } catch (err) {
        if (err instanceof z.ZodError) {
            return response.status(400).json({ errors: err.errors });
        }
        console.log({ err });
        return response.status(500).send("Internal Server Error");
    }
};

export const getUserChannels = async (request, response, next) => {
    try {
        const userId = new mongoose.Types.ObjectId(request.userId);
        const channels = await Channel.find({
            $or: [{ admin: userId }, { members: userId }],
        }).sort({ updatedAt: -1 });

        return response.status(200).json({ channels });
    } catch (err) {
        console.log({ err });
        return response.status(500).send("Internal Server Error");
    }
};

export const getChannelMessages = async (request, response, next) => {
    try {
        // Validate request params
        const { channelId } = getChannelMessagesSchema.parse(request.params);

        const channel = await Channel.findById(channelId).populate({
            path: "messages",
            populate: {
                path: "sender",
                select: "firstName lastName email _id image color",
            },
        });

        if (!channel) {
            return response.status(404).send("Channel not found");
        }
        const messages = channel.messages;
        return response.status(200).json({ messages });
    } catch (err) {
        if (err instanceof z.ZodError) {
            return response.status(400).json({ errors: err.errors });
        }
        console.log({ err });
        return response.status(500).send("Internal Server Error");
    }
};
