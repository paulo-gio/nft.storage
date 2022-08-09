const CONTRACT_ADDRESS = "0x706001Beb1b13AC6d9F6b48060207bf4a9147646"
const META_DATA_URL = "ipfs://bafyreietjhrutci5w77oihihujxdkn76lufdlfsn32yxmcgqhesf3faqgu"

async function mintNFT(contractAddress, metaDataURL) {
   const NFT = await ethers.getContractFactory("NFT")
   const [owner] = await ethers.getSigners()
   await NFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT cunhado para: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });
