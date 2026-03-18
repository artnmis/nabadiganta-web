import { motion } from "framer-motion";

export default function HeroButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg shadow-blue-200"
    >
      আমাদের উদ্যোগগুলো দেখুন
    </motion.button>
  );
}