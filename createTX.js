// Import the Babbage SDK
const { createAction } = require("@babbage/sdk-ts");

// Immediately Invoked Function Expression (IIFE)
(async () => {
  try {
    // Step 1: Create a transaction action using Babbage SDK
    const action = createAction({
      outputs: [{
        satoshis: 1000, // Set the Bitcoin amount in satoshis (e.g., 1000 = 0.00001 BTC)
        script: '2102aaa7a5a2e386840889732be8d8264d42198f116903ed9f8f2cc9763c0e9958acac0e4d7920666972737420746f6b656e0849276d204d6174744630440220187800c3732512ef3d3ccdf741966b45f4251f879ac933160837a03d1c98a420022064c4d3fb3c07b12c47aae5baef7890e996ffa680e32fb8aa678c7f06ff0d37bd6d75',
        description: 'First token!'
      }],
      description: 'Creating my first token transaction with Babbage SDK'
    });

    // Step 2: Log the created action to verify it
    console.log('Transaction action created:', action);

  } catch (error) {
    // Step 3: Handle any errors that occur during transaction creation
    console.error('Error creating transaction:', error);
  }
})();
