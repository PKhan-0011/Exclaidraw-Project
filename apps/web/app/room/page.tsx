export default function ChatRoom({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const slug = params.slug;
}

// Yha p generally jo hai wo like path params jo hai wo params.dynamicRoyte karke mil jayega
// for an example /chat/12345 slug hai wo 12345 aa jayega okkh!.. in next.js hamm slug jo hai wo params.slug karke milega

// but in express or node.js hame req.params.roomId aise karna padta hai

//
