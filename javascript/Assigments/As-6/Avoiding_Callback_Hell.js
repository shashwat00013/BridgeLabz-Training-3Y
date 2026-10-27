// Q5: Callback Hell vs async/await


function runStageWithCallback(stageName, callback) {
  setTimeout(() => {
    console.log(`[Callback] ${stageName}`);
    callback();
  }, 1000);
}

function runPipelineWithCallbacks(onFinish) {
  
  runStageWithCallback("Design", () => {
    runStageWithCallback("Build", () => {
      runStageWithCallback("Test", () => {
        runStageWithCallback("Deploy", () => {
          runStageWithCallback("Celebrate", () => {
            onFinish();
          });
        });
      });
    });
  });
}

// =============== Part 2: async/await (clean version) ===============
function runStageWithPromise(stageName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`[Async/Await] ${stageName}`);
      resolve();
    }, 1000);
  });
}

async function runPipelineWithAsyncAwait() {
  try {
    // Code upar se neeche seedha padhta hai, bilkul synchronous jaisa
    await runStageWithPromise("Design");
    await runStageWithPromise("Build");
    await runStageWithPromise("Test");
    await runStageWithPromise("Deploy");
    await runStageWithPromise("Celebrate");
    console.log("Pipeline complete (async/await)");
  } catch (error) {
    console.log("Pipeline failed:", error.message);
  }
}

// Pehle callback version chalao, khatam hone par async/await version
console.log("--- Callback Hell version ---");
runPipelineWithCallbacks(() => {
  console.log("Pipeline complete (callbacks)\n");
  console.log("--- async/await version ---");
  runPipelineWithAsyncAwait();
});
