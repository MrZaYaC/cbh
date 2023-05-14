const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns partitionKey from the event if it exists", () => {
    const event = { partitionKey: "test" };
    const result = deterministicPartitionKey(event);
    expect(result).toBe("test");
  });

  it("Returns a hash of the stringified event if partitionKey does not exist", () => {
    const event = { data: "test" };
    const result = deterministicPartitionKey(event);
    expect(result).toHaveLength(128); // sha3-512 hash length in hex
  });

  it("Returns a hash if the partitionKey length is greater than 256", () => {
    const event = { partitionKey: "a".repeat(257) };
    const result = deterministicPartitionKey(event);
    expect(result).toHaveLength(128); // sha3-512 hash length in hex
  });
});
