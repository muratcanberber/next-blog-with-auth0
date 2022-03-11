import Image from "next/image";

function HomePage() {
  return (
    <div className="site-container">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">
          Ben Murat Can Berber. Yazılım Bloguma hoş geldiniz.
        </h1>
        <div className="max-w-4xl mx-auto mt-10">
          <Image
            src="/photo1.jpg"
            alt="Picture of the author"
            width={400}
            height={400}
          />
        </div>

        <p>
          Javascript, Python, C# gibi diller ile React, NextJS, VueJS, Svelte
          gibi yazılımları kullanmayı seviyorum.
        </p>

        <p>
          Henüz bir Youtube kanalım yok ama bu olmayacağı anlamına gelmiyor :)
        </p>
      </div>
    </div>
  );
}

export default HomePage;
