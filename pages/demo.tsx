import Article from "@/components/Article";
import Script from "next/script";

export default function Home() {
  return (
    <main>
      <Article title="Demo">
        <p>
          This is a demo page. You may try out the face detection demo below.
          Please note that you must allow the browser to access your camera in
          order to try out the demo.
        </p>
        <h1>Demo of Face Detection</h1>
        <div id="demo_canvas">
          <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js"
            strategy="afterInteractive"
          />
          <Script
            src="https://unpkg.com/ml5@latest/dist/ml5.min.js"
            strategy="afterInteractive"
          />
          <Script src="./demo_face_detection.js" />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
          perspiciatis. Laudantium accusamus tempora provident quas! Molestias
          voluptatum assumenda placeat iusto modi rem expedita, nobis possimus
          sequi repellat, rerum saepe beatae inventore quisquam nisi vel tempora
          illo adipisci sint doloribus, ipsum perferendis minus incidunt vero?
          Sed non accusamus accusantium voluptate, magni placeat fuga
          consectetur exercitationem velit cumque cupiditate cum. Fugiat non
          omnis illum placeat, vero veniam ex provident ipsam accusamus soluta
          rerum at a nemo dolore sit aut sapiente quisquam facilis magnam
          accusantium laudantium hic sed iste. Esse voluptas explicabo labore,
          veniam ullam minus accusantium tempora obcaecati, alias amet nostrum
          odio earum in cupiditate iusto sint quod! Aliquam vel fugit quia
          voluptate labore saepe impedit ipsam accusamus doloremque dolor,
          corporis laudantium, aspernatur quibusdam quae similique laboriosam in
          debitis voluptatem natus maxime consequuntur earum! Impedit at earum,
          quibusdam delectus a maiores repudiandae quia dolore molestiae
          officiis dolorem error perspiciatis quam omnis nesciunt, perferendis
          tenetur, voluptatem sunt obcaecati! Ipsam, similique alias nam eos
          obcaecati aspernatur suscipit magni culpa natus delectus qui eius.
          Alias qui consectetur culpa! Voluptatum odio veniam fugit, delectus
          dolore corporis, qui quod provident sit numquam eos quos suscipit
          voluptates voluptatibus odit magni nostrum itaque similique molestiae!
          Sequi eligendi ratione velit eum beatae magni? Possimus, accusamus.
          Illum quod laboriosam laborum voluptatum voluptatem fugit inventore,
          architecto repellendus? Fugiat adipisci repellendus ex doloribus
          placeat optio doloremque atque reprehenderit beatae nesciunt,
          architecto incidunt sequi tempora aspernatur. Aut dolores iste in,
          exercitationem libero magni facere ducimus alias, quis atque eveniet.
          Dolor quam amet voluptate ipsam vero nobis vel magnam distinctio
          officia. Aspernatur ut mollitia cumque velit facilis totam quas quam
          fuga qui culpa ipsa debitis odit possimus obcaecati in doloremque
          facere suscipit molestias impedit, earum deserunt voluptas, error
          officiis! Ratione, distinctio natus. Iusto obcaecati incidunt eveniet
          eos magni deleniti, nesciunt accusamus nihil aperiam! Beatae quaerat,
          quo deserunt pariatur adipisci nobis amet tenetur nesciunt magnam
          rerum aut incidunt dolor repellendus et vero expedita consequatur
          iure, delectus mollitia, accusamus id vitae! Inventore dolorum,
          doloribus similique magni fuga quaerat nulla aliquid maiores earum
          distinctio accusamus blanditiis modi quod provident, odio totam dolore
          facilis vero. Molestias quo quis voluptates, voluptas fuga eos.
          Facilis id dignissimos veritatis non a at ipsum excepturi dolores
          sequi earum odio eum tenetur, sapiente explicabo suscipit nihil quis
          minima, quam iste iusto aut autem ut. Magni velit voluptatem nam
          voluptates nostrum quasi deserunt sequi, obcaecati, minima dolorem a
          ratione facere quae illo delectus enim repellendus eum aut aspernatur
          veritatis asperiores. Dolorem mollitia nostrum consequuntur quidem
          aspernatur officiis reiciendis eaque, animi neque id dolore optio
          obcaecati libero atque veritatis est? Eos odit et quod consequatur
          error laborum quis, neque ducimus reiciendis mollitia? Excepturi nemo
          ex error? Veritatis quod vel quia? Atque sint veritatis magni eos quis
          modi, suscipit nam reprehenderit quae praesentium maiores, laborum
          recusandae, illum sit excepturi tempora similique impedit delectus
          saepe. Minus molestiae aspernatur aliquid perferendis quam sapiente,
          nulla ullam cum odit quod? Repellat quisquam reprehenderit officia,
          maxime numquam aspernatur perspiciatis possimus sint porro fuga
          eligendi, accusamus culpa nemo itaque nisi excepturi ut nulla!
        </p>
      </Article>
    </main>
  );
}
