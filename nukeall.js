if (command === "nukeall") {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("nice try.").then(msg => {
        msg.delete({ timeout: 30000 })
    })

     message.channel.send("https://media1.tenor.com/images/99b6aef7a72c724258859e8df52ea6f7/tenor.gif?itemid=18563156").then(msg => {
              msg.delete({ timeout: 5000 }).then(msg => {
    message.channel.clone()
  .then(async clone => {
    await clone.setPosition(message.channel.position);
     message.channel.delete()


    })
});