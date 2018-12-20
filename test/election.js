var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts) {
	var electionInstance;

	it("initializes with 3 candidates", function() {
		return Election.deployed().then(function(instance) {
			return instance.candidatesCount();
		}).then(function(count) {
			assert.equal(count, 3);
		});
	});

	it("inititalizes candidates with correct values", function() {
		return Election.deployed().then(function(instance){
			electionInstance = instance;
			return electionInstance.candidates(1);
		}).then(function(candidate) {
			assert.equal(candidate[0], 1, "contains correct id");
			assert.equal(candidate[1], "Dexter", "contains correct candidate name");
			assert.equal(candidate[2], 0, "contains correct vote count");
			return electionInstance.candidates(2);
		}).then(function(candidate) {
			assert.equal(candidate[0], 2, "contains correct id");
			assert.equal(candidate[1], "Heisenberg", "contains correct candidate name");
			assert.equal(candidate[2], 0, "contains correct vote count");
			return electionInstance.candidates(3);
		}).then(function(candidate) {
			assert.equal(candidate[0], 3, "contains correct id");
			assert.equal(candidate[1], "Bruce Wayne", "contains correct candidate name");
			assert.equal(candidate[2], 0, "contains correct vote count");
		});
	});

});