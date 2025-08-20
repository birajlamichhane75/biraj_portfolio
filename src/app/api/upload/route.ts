import { v2 as cloudinary } from "cloudinary";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";


cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export async function POST(req:Request){
    try {
        const {data} = await req.json();
        const uploaded = await cloudinary.uploader.upload(data, {
            folder:"portfolio_projects", // organize image in a folder
        });

        return NextResponse.json({url:uploaded.secure_url});
    } catch (error) {
        return NextResponse.json({success:false, error:error.message},{status:500});
    }
}