import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import DashboardSidebar from "@/layout/DashboardSidebar";


export const metadata = {
  title: "Admin Panel",
};

async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  await connectDB();
  const user = await User.findOne({ email: session.user.email });

  if (!user) return <h3>مشکلی پیش امده است </h3>;
  return (
    <DashboardSidebar role={user.role} email={user.email}>
      {children}
    </DashboardSidebar>
  );
}

export default DashboardLayout;
