const lsl = require('../index');
const ref = require('ref');

// Resolve an LSL stream with type='EEG'
const streams = lsl.resolve_byprop('type', 'EEG');

streamInlet = new lsl.StreamInlet(streams[0], 10, 5);
streamInlet.on('chunk', console.log);
streamInlet.on('closed', console.log);
streamInlet.streamChunks(10);

// // Open an inlet
// const chunkSize = 5;
// const bufferLength = 10;
// const inlet = lsl.create_inlet(streams[0], bufferLength, chunkSize, 1);
// console.log('created inlet');

// // Receive data
// const numChannels = 3;
// let sampleBuffer = new lsl.FloatArray(bufferLength * numChannels);
// let timestampBuffer = new lsl.DoubleArray(bufferLength);
// while (true) {
//     const samps = lsl.pull_chunk(
//         inlet,
//         sampleBuffer,
//         timestampBuffer,
//         sampleBuffer.length,
//         timestampBuffer.length,
//         10,
//         0,
//     );
//     console.log(
//         new Array(timestampBuffer.length).fill(0).map((_, i) => ({
//             data: sampleBuffer.slice(i * numChannels, i * numChannels + numChannels).toJSON(),
//             timestamp: timestampBuffer[i],
//         })),
//     );
// }
