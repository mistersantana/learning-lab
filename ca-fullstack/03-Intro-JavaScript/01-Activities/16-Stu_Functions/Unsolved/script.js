// ✅ Function Declaration — checks if two inputs are equal
function check (a, b) {
  if (a === b) {
    console.log("✅ Inputs match exactly (same type and value.");
  }else if (a == b) {
    console.log("⚠️ Inputs match in value, but not in type.");
  }else {
    console.log("❌ Inputs do not match.");
  }
}

// Logs: "✅ Inputs match exactly (same type and value."
check("password123", "password123");


// Logs: "⚠️ Inputs match in value, but not in type."
check(42, "42");

// Logs: "❌ Inputs do not match."
check(false, "true");
