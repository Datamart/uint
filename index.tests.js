import * as assert from 'assert';
import {uint8, uint16, uint32} from 'uint';

const runTests = () => {
  assert.strictEqual(uint8(0), 0);
  assert.strictEqual(uint8(1), 1);
  assert.strictEqual(uint8(255), 255);
  assert.strictEqual(uint8(256), NaN);
  assert.strictEqual(uint8(-256), NaN);
  assert.strictEqual(uint8(-1), NaN);

  assert.strictEqual(uint16(0), 0);
  assert.strictEqual(uint16(1), 1);
  assert.strictEqual(uint16(65535), 65535);
  assert.strictEqual(uint16(65536), NaN);
  assert.strictEqual(uint16(-65536), NaN);
  assert.strictEqual(uint16(-1), NaN);

  assert.strictEqual(uint32(0), 0);
  assert.strictEqual(uint32(1), 1);
  assert.strictEqual(uint32(4294967295), 4294967295);
  assert.strictEqual(uint16(4294967296), NaN);
  assert.strictEqual(uint16(-4294967295), NaN);
  assert.strictEqual(uint32(-1), NaN);
};

runTests();
