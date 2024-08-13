import { BigInt } from "@graphprotocol/graph-ts";
import { Transfer } from "../generated/FarmCity20/FarmCity20";
import { NFT } from "../generated/schema";

export function handleTransfer(event: Transfer): void {
  // Load the NFT by its token ID or create a new one if it doesn't exist
  let nft = NFT.load(event.params.tokenId.toString());

  if (!nft) {
    nft = new NFT(event.params.tokenId.toString());
    nft.tokenId = event.params.tokenId;
  }

  // Update the owner of the NFT
  nft.owner = event.params.to;

  // Optionally, you could also store the token URI if available
  // nft.uri = ...

  // Save the NFT entity back to the store
  nft.save();
}
