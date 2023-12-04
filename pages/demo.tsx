import Article from "@/components/Article";
import Code from "@/components/Code";
import Link from "next/link";
import Script from "next/script";

export default function Demo() {
  return (
    <main>
      <Article title="Demo">
        <p>
          This is a demo page. You may try out the face detection demo below.
          Please note that you must allow the browser to access your camera in
          order to try out the demo.
        </p>
        <h1>Demo of Face Detection</h1>
        <p>
          In this demo, we will use vanilla javascript to create a simple face
          detection demo. We will use the ML5 library to create the face
          detection model and the P5.js library to create the canvas for the
          video and the face detection results.
        </p>
        <div id="demo_canvas">
          <Script
            src="./scripts/demo_face_detection.js"
            strategy="beforeInteractive"
          />
          <Script
            src="https://unpkg.com/ml5@latest/dist/ml5.min.js"
            strategy="beforeInteractive"
            defer
          />
          <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js"
            strategy="afterInteractive"
            defer
          />
        </div>

        <h1>Libraries Used</h1>
        <h2>ML5</h2>
        <p>
          ML5 is a library that provides easy-to-use machine learning
          functionality for the web. It is built on top of TensorFlow.js. You
          may read more about ML5 at{" "}
          <Link href="https://learn.ml5js.org/#/">Here</Link>.
        </p>
        <h2>P5.js</h2>
        <p>
          P5.js is a library that provides easy-to-use drawing and animation
          functionality for the web. You may read more about P5.js at{" "}
          <Link href="https://p5js.org/">Here</Link>.
        </p>

        <h1>Setting up</h1>
        <p>
          In this tutorial, we used CDN links to import the libraries. However,
          you may also install the libraries using npm. Please find the proper
          installation guide for the libraries if you are using npm.
        </p>
        <p>
          Following is the code to import the libraries using CDN links. Please
          note that you may use the latest version of the libraries by changing
          the version number in the links.
        </p>
        <Code
          code={`
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js" />
<script src="https://unpkg.com/ml5@latest/dist/ml5.min.js" />
`}
          language="html"
        />
        <p>
          Next, we will create a canvas to display the video and the face
          detection results. We will also create a button to start the face
          detection process.
        </p>
        <p>
          We will use the following code to create the canvas and the button.
          Please note that we will use the <code>createCanvas</code> function
          from P5.js to create the canvas.
        </p>
        <Code code={`let faceApi, video, detections;`} language="javascript" />
        <p>
          we need to declare the variables for the faceApi, video, and
          detections. We will use the <code>createCapture</code> function from
          P5.js to create the video capture. We will use the{" "}
          <code>createButton</code> function from P5.js to create the button.
        </p>
        <Code
          code={`
function setup() {
  const canvas = createCanvas(630, 440);
  canvas.parent("demo_canvas");
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  faceApi = ml5.faceApi(video, modelReady);
}
          `}
          language="javascript"
          lineNumbers
        />
      </Article>
    </main>
  );
}
