pragma solidity ^0.4.11;

contract Election{
	//model candidate
	struct Candidate {
		uint id;
		string name;
		uint voteCount;
	}
	//Store Candidates
	//string public candidate;
	//Fetching a candidate
	mapping(uint => Candidate) public candidates;
	//store candidates count
	uint public candidatesCount;

	//constructor
	function Election () public {
		//candidate = "Rudy";
		addCandidate("Dexter");
		addCandidate("Heisenberg");
		addCandidate("Bruce Wayne");
	}

	function addCandidate (string _name) private {
		candidatesCount++;
		candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
	}
}