pragma solidity ^0.4.18;

/**
 * Contract for shipment
 */
contract Tracking {
    struct Data {
        uint id; // id of the data base row
        uint ts; // unix timestamp
        string dataHash; // hash to verify 
    }

    string shipment; // id for shipment
    address owner; // owner address
    uint counter = 0; // index of last data entry in the array
    Data[] data; // data storage
    // uint price; // price for the shipment
    // address seller;
    // address buyer;
    // bool paid = false;

    /**
     * Constructor set owner and shipment id
     */
    function Tracking(string id/*, uint amount, address seller, address buyer*/) public {
        shipment = id;
        owner = msg.sender;
        // price = amount;
        // seller = seller;
        // buyer = buyer;
    }

    /**
     * Enter a new data point to the blockchain
     */
    function addDataPoint(uint id, uint ts, string dataHash) public {
        require(msg.sender == owner);
        data.push(Data(id, ts, dataHash));
        /*Data curDataPoint = Data({id:id, ts:ts, dataHash:dataHash});
        data[counter] = curDataPoint;*/
        counter += 1;
    }

    /**
     * Every one can retrive the data stored in the contract to verify the integrity of our db
     */
    function getDataPoints() public view returns (Data[] d) {
        d = data;
    }

    /**
     * Get
     */
    function getHashByIndex(uint i) public view returns (string h) {
        require(i >= 0);
        require(i < counter);
        h = data[i].dataHash;
    } 

    /**
     * Returns the shipment id
     */
    function getShipmentId() public view returns (string s) {
        s = shipment;
    }

    /**
     * Currently not needed, as we use `Array.push`
     */
    function getLastIndex() public view returns (uint i) {
        i = counter;
    }

    /**
     * Confirm shipment and release funds to seller
     */
    /*function confirmReceiving() public {
        require(msg.sender == buyer);
        require(this.balance >= amount);
        require(!paid);

        seller.transfer(amount);
    }*/

    /**
     * Have a fallback to withdraw ETH, if someone sends by accident
     */
    function withdraw() public {
        require(msg.sender == owner);
        require(this.balance > 0);

        owner.transfer(this.balance);
    }
}