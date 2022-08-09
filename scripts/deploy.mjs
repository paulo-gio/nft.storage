async function deployContract() {
    const NFT = await ethers.getContractFactory("NFT")
    const nft = await NFT.deploy()
    await nft.deployed()
    const txHash = nft.deployTransaction.hash
    const txReceipt = await ethers.provider.waitForTransaction(txHash)
    const contractAddress = txReceipt.contractAddress
    console.log("Contrato implantado no endereço:", contractAddress)
   }
   
   deployContract()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
   