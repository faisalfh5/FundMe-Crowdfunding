// const axios = require("axios");
// const FormData = require("form-data");
// // require('dotenv').config({ path: '.env' });

// // const token = process.env.TOKEN;
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmNTFkNTJkZC1kZWJkLTQ3ZjgtOTIwMS0zMDJiYjAyYTgxODciLCJlbWFpbCI6ImZhaXNhbGg1NTBAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImYyMTM3YTkyNjc5YTRiNDM0MWEzIiwic2NvcGVkS2V5U2VjcmV0IjoiYzJhNDJkM2IyNjJjZjM5OTY4NDRjMzUyNzM5MTU5MmIzMTVjNDExMWVkOWRiMzhiZTBiMTg1YzBiYmQ1ZDEzZiIsImlhdCI6MTY4NDQwODQzM30.O_e355189EXNtc_JDmpVPo3_sFZdHxh3qWxSRCzAJSo";

// const Key = "f2137a92679a4b4341a3";
// const Secret =
//   "c2a42d3b262cf3996844c3527391592b315c4111ed9db38be0b185c0bbd5d13f";

// const uploadFileToIPFS = async (file) => {
//   console.log("file", file);
//   const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
//   // making axios POST request to Pinata ⬇️

//   const data = new FormData();
//   data.append("file", file);

//   const metadata = JSON.stringify({
//     name: "testname",
//     keyvalues: {
//       exampleKey: "exampleValue",
//     },
//   });
//   data.append("pinataMetadata", metadata);

//   // pinataOptions are optional
//   const pinataOptions = JSON.stringify({
//     cidVersion: 0,
//     customPinPolicy: {
//       regions: [
//         {
//           id: "FRA1",
//           desiredReplicationCount: 1,
//         },
//         {
//           id: "NYC1",
//           desiredReplicationCount: 2,
//         },
//       ],
//     },
//   });
//   data.append("pinataOptions", pinataOptions);

//   return axios
//     .post(url, data, {
//       maxBodyLength: "Infinity",
//       headers: {
//         "Content-Type": `multipart/form-data; boundary=${data.boundary}`,
//         Authorization: `Bearer ${token}`,
//         pinata_api_key: Key,
//         pinata_secret_api_key: Secret,
//       },
//     })
//     .then(function (response) {
//       // setAllData(response.data.IpfsHash);
//       console.log("image uploaded", response.data.IpfsHash);
//       return {
//         success: true,
//         pinataURL: `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`,
//       };
//     })
//     .catch(function (error) {
//       console.log("ye wala error hai ?", error);
//       return {
//         success: false,
//         message: error.message,
//       };
//     });
// };

// export default uploadFileToIPFS;

import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmNTFkNTJkZC1kZWJkLTQ3ZjgtOTIwMS0zMDJiYjAyYTgxODciLCJlbWFpbCI6ImZhaXNhbGg1NTBAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImYyMTM3YTkyNjc5YTRiNDM0MWEzIiwic2NvcGVkS2V5U2VjcmV0IjoiYzJhNDJkM2IyNjJjZjM5OTY4NDRjMzUyNzM5MTU5MmIzMTVjNDExMWVkOWRiMzhiZTBiMTg1YzBiYmQ1ZDEzZiIsImlhdCI6MTY4NDQwODQzM30.O_e355189EXNtc_JDmpVPo3_sFZdHxh3qWxSRCzAJSo";

const Key = "f2137a92679a4b4341a3";
const Secret =
  "c2a42d3b262cf3996844c3527391592b315c4111ed9db38be0b185c0bbd5d13f";

// eslint-disable-next-line consistent-return
const uploadFilesToPinata = async (file, setAllData) => {
  console.log("file", file);
  try {
    // eslint-disable-next-line no-await-in-loop
    // const imageData = await file.async("arraybuffer");
    const formData = new FormData();
    formData.append("file", new Blob([file]));
    try {
      // eslint-disable-next-line no-await-in-loop
      const response = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
            pinata_api_key: Key,
            pinata_secret_api_key: Secret,
          },
        }
      );
      if (response.status === 200) {
        console.log("Ipfs images");
        setAllData(response.data.IpfsHash);
        console.log(
          "image url",
          `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`
        );
      } else {
        console.error(`Failed to upload image ${file.name}`);
      }
    } catch (error) {
      console.error(`Error uploading image ${file.name}:`, error);
    }
  } catch (error) {
    console.error("Error extracting images from zip:", error);
  }
};

export default uploadFilesToPinata;
