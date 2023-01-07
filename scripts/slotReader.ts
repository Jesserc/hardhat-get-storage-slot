import { ethers } from "hardhat";

async function main() {
  const DataStore = await ethers.getContractFactory("DataStore");
  const data = await DataStore.deploy();
  let newData = await ethers.provider.getStorageAt(data.address, 1);
  console.log(newData);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
