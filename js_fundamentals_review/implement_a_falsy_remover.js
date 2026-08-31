function bouncer(members) {
  const newMembers = [];
  for (const member of members) {
    if (member) {
      newMembers.push(member);
    }
  }

  return newMembers;
}
