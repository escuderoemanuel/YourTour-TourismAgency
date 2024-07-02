import { Inter, Praise, Raleway } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const raleway = Raleway({ weight: ["500", "600", "800"], subsets: ["latin"] });

export const raleway600 = Raleway({ weight: ["600"], subsets: ["latin"] });

export const praise = Praise({
  weight: ["400"],
  subsets: ["latin"],
});
