import Article from "@/components/Article";
import Image from "@/components/Image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Image
        className="max-width"
        src="https://images.unsplash.com/photo-1521220546621-cf34a1165c67?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        author="Andrew Seaman"
        authorLink="https://unsplash.com/@amseaman"
      />
      <Article title="Face recognition and its applications">
        <p>
          Have you ever wondered how your phone can recognize your face? It's
          all thanks to face recognition technology! This technology identifies
          individuals based on their unique facial characteristics, making it a
          popular choice for various applications, including bank apps and
          access control.
        </p>
        <h1>Face Recognition with Deep Learning</h1>
        <p>
          Traditionally, <b>Face Recognition</b> involved extracting facial
          features and matching them to a database. However, this approach had
          its limitations since it couldn't account for changes in the human
          face. That's where deep learning comes in! With deep learning
          techniques, face recognition has seen a significant improvement in
          performance and accuracy. For instance, DeepFace, a deep
          learning-based face recognition system, has achieved an accuracy rate
          of <b>97.35%</b>, which is comparable to human performance.
        </p>
        <p>
          As shown in <Link href="#figure_1_a">Figure 1.a</Link>, research on
          deep learning-based face recognition has been on the rise, with 90
          more pieces of research in 2018 compared to 2011. It's exciting to see
          how much progress has been made in this field, and deep learning is
          quickly becoming a go-to method for face recognition research.
        </p>
        <Image
          id="figure_1_a"
          src="images/figure_1_a.png"
          caption="Figure 1.a: A statistic of the deep learning-based face image analysis from 2011 to 2018"
        />
        <h2>Face Recognition Pipeline</h2>
        <p>
          But how do these systems work? According to a recent study [3], the
          pipeline of a face recognition system based on deep learning is
          divided into several stages. First, the system detects the face region
          (ROI) in the input image and aligns the face region coordinate. There
          are two types of approaches to doing the face detection using deep
          learning.
        </p>
        <p>
          The first one is region-based, which produces a set of typical object
          proposals and uses the Deep Convolution Network (DCNN) to determine
          whether the image contains the face.
        </p>
        <p>
          The second one is sliding window-based, which applies the DCNN to
          calculate the face detection score in the window and the coordinate of
          the bounding box, where the face location is detected.
        </p>
        <p>
          After detecting the face, the feature extractor will extract the
          facial features from the image. To align the face and find the
          canonical coordinates, the facial key point is used in preprocessing.
          Finally, the system applies face matching to the facial feature stored
          in the database [4]. It's important to note that to obtain accurate
          predictions on unconstrained face images, the model for prediction
          should be robust to avoid recognizing the wrong people. So,
          researchers are continually working on improving the accuracy and
          performance of these systems. Exciting stuff, right? It's amazing to
          see how technology is advancing and making our lives easier in so many
          different ways!
        </p>
        <Image
          src="https://images.unsplash.com/photo-1584428018260-1a9bc0e15365?q=80&w=2811&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          author="Jan Huber"
          authorLink="https://unsplash.com/@jan_huber"
        />
        <h1>Related Works</h1>
        <p>
          To investigate the differences between these methods and evaluate
          their performance, we need to understand the algorithms and
          Convolution Network (CNN) architecture behind them. In this page,
          we'll take a closer look at these technologies and discover the
          challenges of face recognition. In this article, we will introduce you
          to different CNNs used for face recognition and its limitations.
        </p>
        <h1>Convolutional Neural Networks (CNNs) for Face Recognition</h1>
        <h2>FaceNet</h2>
        <p>
          First up, let's talk about FaceNet. This model is the first CNN to use
          the triplet loss function, which allows it to learn Euclidean
          embedding and use K-NN classification to do face recognition using the
          clustering technique. The embeddings are created by other pre-trained
          models, and L2 normalization is applied to ensure that the squared L2
          distance between the embedding corresponds to the face similarity. The
          triplet loss function then computes the difference between the
          embedding space distance to ensure that the distance between the
          anchor image and the positive image is minimized, and the distance
          between the anchor image and the negative image is maximized.
        </p>
        <h2>DeepFace</h2>
        <p>
          Next, we have DeepFace, which was developed by Facebook's scientists.
          This model focuses on the steps of alignment and representation. In
          the alignment stage, it uses analytical 3D modeling of the face using
          fiducial points after 2D Alignment, 3D Alignment, and frontalization.
          Meanwhile, in the representation stage, the 3D-aligned RGB image is
          inputted with a size of 152 * 152 pixels. The model then uses various
          filters and layers to extract low-level features and compute the
          distribution of the class labels.
        </p>
        <h2>Pros and Cons of Face Recognition Based on Deep Learning</h2>
        <p>
          While deep learning models like FaceNet and DeepFace have their
          advantages, they also have their limitations. For example, the quality
          of the image can affect the performance of the model. Factors like
          blur, noise, and brightness can decrease the verification accuracy in
          face recognition. Additionally, the accuracy of these models can vary
          in different demographic groups, and missing data like the periocular
          region can also impact their performance. Despite these limitations,
          it's exciting to see how much progress has been made in the field of
          face recognition thanks to deep learning technology. We can't wait to
          see what new advancements will be made in the future!
        </p>
      </Article>
    </main>
  );
}
