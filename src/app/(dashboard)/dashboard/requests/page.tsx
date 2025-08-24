import { fetchRedis } from "@/helpers/redis";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

const Requests = async () => {
  const session = await getServerSession(authOptions);

  if (!session) notFound();

  // ids of people who sent current logged in user a friend requests

  const incomingSenderIds = (await fetchRedis(
    "smembers",
    `user:${session.user.id}:incoming_friend_requests`
  )) as string[];

  const incomingFriendRequests = await Promise.all(
    incomingSenderIds.map(async (senderId) => {
      const sender = (await fetchRedis("get", `user:${senderId}`)) as User
      return {
        
      }
    })
  );

  return <div>Requests</div>;
};

export default Requests;
