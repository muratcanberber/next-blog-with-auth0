import Image from "next/image";

function HomePage() {
  return (
    <div className="site-container">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">V 1.0</h1>
        <h1 className="text-2xl font-bold">
          Ben Murat Can Berber. Yazılım Bloguma hoş geldiniz.
        </h1>

        <p>
          Javascript, Python, C# gibi diller ile React, NextJS, VueJS, Svelte
          gibi yazılımları kullanmayı seviyorum.
        </p>

        <p>
          Henüz bir Youtube kanalım yok ama bu olmayacağı anlamına gelmiyor :)
        </p>

        <div className="site-4xl-container  mt-20">
          <Image
            src="/photo1.jpg"
            alt="Picture of the author"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
