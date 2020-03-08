import { assertEquals, assertThrowsAsync } from 'https://deno.land/std/testing/asserts.ts';

Deno.test( async function dummy_test() {

    assertEquals( true, true );
} );

await Deno.runTests();
