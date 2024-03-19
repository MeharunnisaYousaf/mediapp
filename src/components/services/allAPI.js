const { commonAPI } = require("./commonAPI");
const { serverUrl } = require("./serverUrl");

//upload video

export const uploadVideo =async (reqBody)=>{
    //make POST http request "http://localhost:4000/videos" to add videos to the json server return response to the add componrnt

    return await commonAPI("POST",`${serverUrl}/videos`,reqBody)
}

//get all videos from json

export const getAllVideo =async ()=>{
    //make GET http request "http://localhost:4000/videos" to get all videos from the json server return response to the view componrnt

    return await commonAPI("GET",`${serverUrl}/videos`,"")
}

//get a video

export const getAVideo =async (id)=>{
    //make GET http request "http://localhost:4000/videos" to get all videos from the json server return response to the videocard componrnt

    return await commonAPI("GET",`${serverUrl}/videos/${id}`,"")
}

//delete a video

export const deleteVideo =async (id)=>{
    //make DELELTE http request "http://localhost:4000/videos" to delete  videos from the json server return response to the videocard componrnt

    return await commonAPI("DELETE",`${serverUrl}/videos${id}`,{})
}

//storing watching videos to json server

export const addToHistory =async (videoDetails)=>{
    //make POST http request "http://localhost:4000/videos" to add videos to the json server return response to the video card component

    return await commonAPI("POST",`${serverUrl}/history`,videoDetails)
}

//GET watching video history to json

export const getAllHistory =async (reqBody)=>{
    //make POST http request "http://localhost:4000/videos" to add videos to the json server return response to the watch history component

    return await commonAPI("POST",`${serverUrl}/history`,"")
}
