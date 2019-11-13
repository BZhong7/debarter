pragma solidity ^0.5.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721Full.sol";
import "../node_modules/@openzeppelin/contracts/drafts/Counters.sol";

 contract ExampleToken is ERC721Full {
     using Counters for Counters.Counter;
     Counters.Counter private _tokenIds;
 
     constructor() ERC721Full("ExampleToken", "EXT") public {
     }
 
     function mintUniqueToken(address _to, string memory _tokenURI) public returns (uint256) {
         _tokenIds.increment();
     
         uint256 newTokenId = _tokenIds.current();
         _mint(_to, newTokenId);
         _setTokenURI(newTokenId, _tokenURI);
     
         return newTokenId;
     
     }
 }
