// 🖥️ System Status Checker
// Change the values and operators below to test different outcomes

const systemLoad = 50;
const isUserPresent = true;
const isSystemOverloaded = (systemLoad > 75);

// 🧠 Your Task: Write conditional statements that evaluate combinations of true/false

if(systemLoad >= 50 && isUserPresent) {
  console.log("True ✅ True ✅");
} else if(isUserPresent && isSystemOverloaded) {
  console.log("True ✅ False ❌");
} else if(!isUserPresent && !isSystemOverloaded) {
  console.log("False ❌ True ✅");
} else {
  console.log("False ❌ False ❌");
}
