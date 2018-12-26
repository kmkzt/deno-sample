import * as deno from "deno";

(async () => {
  for (let i = 1; i < deno.args.length; i++) {
    let filename = deno.args[i];
    let file = await deno.open(filename);
    await deno.copy(deno.stdout, file);
    file.close();
  }
})();