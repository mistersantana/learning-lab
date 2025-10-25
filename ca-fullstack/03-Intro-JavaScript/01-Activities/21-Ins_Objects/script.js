// 👤 Objects are collections of related data stored as key-value pairs
const userProfile = {
  username: "techExplorer",
  age: 29,
  location: "Austin, TX",
  isActive: true,
  membershipLevel: "Pro"
};

// 🧭 Accessing property values
// Using dot notation — best for known property names
console.log(userProfile.username); // "techExplorer"

// Using bracket notation — useful for dynamic property names
console.log(userProfile["location"]); // "Austin, TX"

// 🧩 Example of dynamic access
const keyToAccess = "membershipLevel";
console.log(userProfile[keyToAccess]); // "Pro"
