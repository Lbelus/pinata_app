import React from "react";
import axios from 'axios';
const GATEWAY_URL = process.env.NEXT_PUBLIC_GATEWAY_URL
  ? process.env.NEXT_PUBLIC_GATEWAY_URL
  : "https://gateway.pinata.cloud";

  async function postCIDAndTimestamp(cid, timestamp) {
    try {
        // Replace with the endpoint where you want to store CID and timestamp
        await axios.post('http://192.168.1.87:3057', { cid, timestamp });
        alert('Data stored successfully!');
    } catch (error) {
        console.error('Error posting data:', error);
        alert('Failed to store data!');
    }
  }


export default function Files(props) {
  postCIDAndTimestamp("123123", "123123");
  return (
    <div className="file-viewer">
      <p>Your IPFS CID:</p>
      <p>{props.cid}</p>
      <a
        href={`${GATEWAY_URL}/ipfs/${props.cid}?pinataGatewayToken=${process.env.NEXT_PUBLIC_GATEWAY_TOKEN}`}
        rel="noopener noreferrer"
        target="_blank"
        className="border-b-2 border-solid border-accent bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent animate-animategradient hover:scale-110 transition-all duration-300 ease-in-out"
      >
        View file
      </a>
    </div>
  );
}
