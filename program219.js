const orgChart = {
  name: "CEO",
  subordinates: [
    {
      name: "CTO",
      subordinates: [
        { name: "Dev1", subordinates: [] },
        { name: "Dev2", subordinates: [] }
      ]
    },
    {
      name: "CFO",
      subordinates: []
    }
  ]
};

function findEmployee(node, targetName) {
  // Agar current employee ka naam match ho gaya
  if (node.name === targetName) {
    return true;
  }

  // Har subordinate ko check karo
  for (let sub of node.subordinates) {
    if (findEmployee(sub, targetName)) {
      return true;
    }
  }

  // Agar kahin bhi nahi mila
  return false;
}

console.log(findEmployee(orgChart, "Dev2")); // true
console.log(findEmployee(orgChart, "CFO"));  // true
console.log(findEmployee(orgChart, "Dev3")); // false