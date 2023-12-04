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

        <h1>Description</h1>

        <h2>Efficiency and effectiveness of PCA</h2>

        <p>
          One technique used for this purpose is called Eigenfaces, which is
          obtained through Principal Component Analysis (PCA). This method
          represents facial features in a concise manner by capturing the most
          important variations in the dataset. By transforming the
          high-dimensional space into a lower-dimensional subspace, Eigenfaces
          effectively reduce the dimensionality of facial images, making face
          recognition more efficient. It's important to note that PCA requires
          the face image to be centered and facing the front, which is suitable
          for datasets like the Olivetti Dataset. Overall, it's fascinating to
          see how Eigenfaces help computers recognize faces more effectively,
          opening up new possibilities for the use of facial recognition
          technology in various fields.
        </p>

        <p>
          It's important to note that PCA requires the face image to be centered
          and facing the front, which is suitable for datasets like the Olivetti
          Dataset. Overall, it's fascinating to see how Eigenfaces help
          computers recognize faces more effectively, opening up new
          possibilities for the use of facial recognition technology in various
          fields.
        </p>

        <h2>Factors Influencing Accuracy</h2>
        <p>
          When working with classification algorithms, you may have noticed
          variations in their accuracy levels. These variations can be
          attributed to several factors, including the unique characteristics of
          each algorithm and how well they are suited to handle the specific
          challenges posed by the dataset. One of the main reasons why some
          classification algorithms exhibit higher accuracy than others is
          because of their inherent characteristics. Different algorithms are
          designed to handle different types of data and perform better on
          certain types of datasets. As a result, some algorithms may be better
          suited for a particular dataset, which can lead to higher accuracy
          levels compared to other algorithms that are not as well-suited.
          Another factor that can impact the accuracy of classification
          algorithms is the specific challenges posed by the dataset. Datasets
          with imbalanced classes or noisy data can be more difficult to
          classify accurately, and certain algorithms may handle these
          challenges better than others. Therefore, the suitability of an
          algorithm for a particular dataset is a crucial factor to consider
          when selecting a classification algorithm.
        </p>
        <h2>Decrease in accuracy in the model trained with noised images</h2>
        <p>
          Facial recognition technology has become incredibly popular in recent
          years, but its accuracy can be affected by various factors such as
          brightness, facial expression, and poor image quality. When facial
          features are damaged in an image, it can have a significant impact on
          face detection, especially when recognition is based on features. To
          overcome this challenge, researchers have been exploring different
          approaches to enhance the accuracy of facial recognition. In a recent
          trial, the Eigenface approach based on Principle Component Analysis
          was utilized to capture the critical information from the image. By
          combining the machine learning model and the Eigenface approach, it
          could recognize and verify the identity of the person in the image.
          However, the accuracy of facial recognition can still be impacted by
          various factors, such as image noise. To investigate this issue, we
          added Gaussian noise to the image and trained the model to assess its
          performance. The results showed that the accuracy of face recognition
          in different classification algorithms decreased considerably due to
          the addition of Gaussian noise.
        </p>
        <h1>Evaluation</h1>
        <h2>Efficiency and effectiveness of PCA</h2>
        <p>
          One of the key factors contributing to this growth is the use of
          Principal Component Analysis (PCA) to extract eigenfaces from images.
          In our trial , 90 eigenfaces were extracted from PCA and applied to
          multiple classifiers for face recognition. Interestingly, some
          eigenfaces displayed explainable features, such as distinctive
          eyebrows, which contributed to the interpretability of the learned
          features. The use of PCA significantly accelerated the face
          recognition process, reducing the time taken by almost half. While the
          total time taken by six classifiers to complete face recognition using
          eigenfaces extracted from PCA was 17.9 seconds, the same process took
          35.6 seconds without the use of eigenfaces. The accuracy scores for
          both normal and noisy datasets, showcasing the robustness of the
          PCA-based approach across diverse scenarios. This highlights the
          potential of PCA in improving the efficiency and accuracy of facial
          recognition systems.
        </p>
        <h2>Factors Influencing Accuracy</h2>
        <p>
          Selecting the right classification algorithm is crucial for achieving
          high accuracy in data analysis. However, choosing the right algorithm
          can be challenging as it depends on the dataset's characteristics and
          the algorithm's suitability for handling noise, capturing relevant
          features, and avoiding overfitting. The choice of algorithm is
          affected by various factors such as model complexity, noise handling,
          robust feature extraction, overfitting, parameter tuning, and dataset
          characteristics. Algorithms such as Support Vector Machines (SVM) and
          Linear Discriminant Analysis (LDA) can capture intricate patterns, but
          they may be more susceptible to overfitting in the presence of noise.
          On the other hand, algorithms like Gaussian Naive Bayes (NB) and
          Logistic Regression (LR) can be compromised if the dataset contains
          significant noise or deviations from their assumptions.
        </p>
        <p>
          Robust feature extraction is essential in handling noisy datasets, and
          algorithms like LDA perform well in this regard. However, models like
          K Nearest Neighbors (KNN) and Decision Trees (DT) might struggle with
          noisy data as they rely on local structures and can be sensitive to
          outliers. Decision Trees, in particular, are prone to overfitting,
          which can lead to lower accuracy when dealing with noisy datasets.
        </p>
        <p>
          Parameter tuning is another critical factor in the performance of some
          algorithms. If the parameters are not correctly adjusted, it can
          impact the model's ability to handle noise and generalize well to new
          data. Finally, the nature of the dataset, including its size,
          diversity, and the degree of noise, plays a crucial role in selecting
          the most appropriate approach based on the intricacies of the data at
          hand.
        </p>
        <p>
          In conclusion, the choice of a classification algorithm should be
          informed by the specific characteristics of the dataset. The diverse
          nature of algorithms allows for flexibility in selecting the most
          appropriate approach based on the intricacies of the data at hand.
          Therefore, data analysts must understand the characteristics of the
          dataset and the suitability of the algorithm to achieve the desired
          results.
        </p>
        <h2>Decrease inaccuracy in the model trained with noised images</h2>
        <p>
          In the field of face recognition, machine learning algorithms play an
          important role in achieving high accuracy. However, the accuracy of
          these algorithms can be significantly affected by the presence of
          noise in the input data. This is evident from the experiments
          conducted on the Olivetti dataset, where the input images were noised
          with Gaussian noise and then fed to PCA to train the machine learning
          algorithms. The experiment showed that the eigenfaces generated from
          the noised image were relatively blurred compared to the ones
          extracted from the original image. As a result, the accuracy of the 6
          different classification algorithms tested dropped drastically. Among
          these, the KNN classification method had the lowest accuracy of 0.12,
          followed by the decision tree classifier. The support vector
          classifier's accuracy dropped by 0.68, while the accuracy of the other
          three algorithms dropped to around 0.4. This drop in accuracy can be
          attributed to the fact that most of these classification methods are
          feature-based, and the presence of Gaussian noise can influence the
          process of selecting the nearest neighbors in the K Nearest Neighbors
          Classifier. The Gaussian noise can also lead to incorrect patterns and
          boundaries being learned by these algorithms, resulting in
          misclassification.
        </p>
      </Article>
    </main>
  );
}
