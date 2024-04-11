import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function addUsers() {
   const res= await prisma.user.create({
        data: {
            name: "Alice",
            email: "alice2@gmail.com",
        },
        select: {
            id: true,
            name: true,
            email: true,
            
        },
    });
  
    console.log(res);}
    


async function updateUsers() {
    const res = await prisma.user.update({
        where: {
            id: 1,
        },
        data: {
            email: "alice2@123",
        },
        select: {
            id: true,
            name: true,
            email: true,
        },})}

 updateUsers();

// addUsers().then(() => {
//     console.log("User added successfully");
// }
// ).catch((err) => {
//     console.error(err);
// });


