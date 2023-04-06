import Link from "next/link";
import Layout from "./layout";
import Image from "next/image";

function Post() {
  return (
    <div className="item">
      <div className="images">
        <Link href={"#"}>
          <Image
            src={"/lady.jpg"}
            className="rounded"
            width={500}
            height={350}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={"#"}>
            <p className="text-orange-600 hover:text-orange-800">
              Business, Travel
            </p>
          </Link>
          <Link href={"#"}>
            <p className="text-gray-800 hover:text-gray-600">- July 3, 2022</p>
          </Link>
        </div>
        <div className="title">
          <Link href={"#"}>
            <p className="text-xl font-bold text-gray-800 hover:text-gray-600">
              Your most unhappy customers are your greatest source of learning
            </p>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
        <div className="author flex py-5">
          <Image
            src={"/girl.jpg"}
            width={60}
            height={60}
            className="rounded-full"
          ></Image>
          <div className="flex flex-col justify-center px-4">
            <Link href={"#"}>
              <p className="text-md font-bold text-gray-800 hover:text-gray-600">
                Flying High
              </p>
            </Link>
            <span className="text-sm text-gray-500">CEO and Founder</span>
          </div>
        </div>
      </div>
    </div>
  );
}
const Articles = () => {
  return (
    <>
      <Layout>
        <section className="container mx-auto md:px-20 py-10">
          <h1 className="font-bold text-4xl py-12 text-center">Health Posts</h1>

          {/* grid columns */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Articles;
