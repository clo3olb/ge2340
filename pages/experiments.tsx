import Article from "@/components/Article";
import Code from "@/components/Code";
import Image from "@/components/Image";
import Link from "next/link";

export default function Experiments() {
  return (
    <main>
      <Article title="Experiments">
        <p>
          Our team have conducted a experiments on differnt algorithms to test
          on face recognition. Plaese note that this work has referenced Serkan
          Peldek's work on{" "}
          <Link href="https://www.kaggle.com/code/serkanpeldek/face-recognition-on-olivetti-dataset">
            Face Recognition
          </Link>{" "}
          for the classic machine learning algorithms. and the Hakan Ozen's work
          on{" "}
          <Link href="https://www.kaggle.com/code/hakanozen/face-recognition-by-lr-rforest-knn-and-cnn">
            Face Recognition with CNN
          </Link>{" "}
        </p>
        <h1>Input</h1>
        <p>
          In this project, we have used the Olivetti dataset for face
          recognition.
        </p>
        <h2>Olivetti Dataset</h2>
        <p>
          The Olivetti dataset comprises a collection of face images captured
          over a two-year period, from April 1992 to April 1994. It consists of
          400 images in total, with each of the 40 individuals represented by
          ten distinct images. These face images were captured under varying
          conditions, including different lighting conditions, facial
          expressions, and facial details, providing a diverse and comprehensive
          dataset for facial recognition and analysis. All the face images
          feature a black background and are presented in grayscale. Each image
          has a resolution of 64x64 pixels. To facilitate data processing, the
          pixel values of the images have been scaled to the range of [0, 1].
          Additionally, to ensure consistency in data representation, the names
          of the 40 individuals have been encoded as integers, ranging from 0 to
          39. The Olivetti dataset serves as a valuable resource for researchers
          and practitioners working in the field of facial recognition, enabling
          the development and evaluation of algorithms and models in this
          domain.
        </p>
        <Image src="./images/olivetti_faces.png" />
        <h2>Gaussian Noise</h2>
        <p>
          For inputs, we have added Gaussian noise to the Olivetti dataset. The
          Gaussian noise is generated using the numpy.random.normal function.
        </p>
        <Code
          language="python"
          code={`
def add_gaussian_noise(image, scale):
    noise = np.random.normal(
        loc=0, scale=scale, size=image.shape)
    noisy_img = np.clip(image + noise, 0, 1)
    return noisy_img`}
          lineNumbers
        />
        <h1>Feature Extraction</h1>
        <p>
          We have used PCA and LDA to extract features from the Olivetti
          dataset.
        </p>
        <h2>PCA</h2>
        <p>
          Principal Component Analysis (PCA) is a widely used dimensionality
          reduction technique in the field of data analysis and machine
          learning. Its primary objective is to transform a high-dimensional
          dataset into a lower-dimensional representation while preserving as
          much of the original information as possible. PCA achieves this by
          identifying the principal components, which are linear combinations of
          the original features that capture the maximum variance in the data.
          These principal components are orthogonal to each other and are ranked
          in order of their significance, with the first component explaining
          the most variance in the dataset. By projecting the data onto a subset
          of the most informative principal components, PCA allows for a
          simplified representation of the data while minimizing the loss of
          relevant information. This reduction in dimensionality not only
          facilitates data visualization but also improves computational
          efficiency and helps mitigate the curse of dimensionality.
        </p>
        <p>
          Moreover, PCA finds applications in various domains, including image
          processing, genetics, finance, and natural language processing,
          enabling researchers and practitioners to explore and analyze complex
          datasets more effectively. Overall, PCA serves as a powerful and
          versatile tool for dimensionality reduction and data exploration,
          offering valuable insights and aiding in the interpretation of large
          and high-dimensional datasets.
        </p>
        <Code
          language="python"
          code={`
from sklearn.decomposition import PCA
pca = PCA()
pca.fit(X)

plt.figure(1, figsize=(6, 4))
plt.plot(pca.explained_variance_, linewidth=2)
plt.xlabel('Components')
plt.ylabel('Explained Variances')
plt.show()
        `}
        />
        <h2>Eigen Faces (Principal Components) from PCA</h2>
        <p>
          Eigenfaces are generated by applying Principal Component Analysis
          (PCA) to a collection of face images. These eigenfaces represent the
          principal components or features extracted from the dataset. While
          eigenfaces themselves are essentially vector-based images, they offer
          valuable insights into the underlying patterns and variations in the
          data. Although eigenfaces are not inherently special, they can exhibit
          certain recognizable features that resemble common attributes such as
          glasses or prominent eyebrows. These seemingly "explainable" features
          can arise from the fact that the eigenfaces capture the most
          significant variations in the face images, including variations
          related to specific facial characteristics. Consequently, eigenfaces
          provide a visual representation of the dominant facial attributes
          present in the dataset, even if they are not explicitly labeled or
          categorized. Despite their simplicity as vector images, eigenfaces
          serve as a useful tool for understanding and exploring the underlying
          structure of face data, helping researchers and practitioners gain
          insights into the diverse facial features and patterns present in a
          given dataset.
        </p>
        <Code
          language="python"
          code={`
X_train_pca = pca.transform(X_train)
X_test_pca = pca.transform(X_test)

X_train_noisy_pca = noisy_pca.transform(X_train_noisy)
X_test_noisy_pca = noisy_pca.transform(X_test_noisy)
        `}
        />
        <Image src="./images/eigenfaces.png" />

        <h2>
          Applying classic machine learning algorithms on PCA and Noisy PCA
        </h2>

        <p>
          We have applied the following algorithms on PCA and Noisy PCA to
          compare the accuracy. The list of algorithms are:
        </p>
        <ul>
          <li>Support Vector Machine (SVM)</li>
          <li>Linear Discriminant Analysis (LDA)</li>
          <li>Logistic Regression (LR)</li>
          <li>Naive Bayes (NB)</li>
          <li>K-Nearest Neighbors (KNN)</li>
          <li>Decision Tree (DT)</li>
        </ul>
        <Code
          language="python"
          code={`
models = []
models.append(('SVM', SVC()))
models.append(('LDA', LinearDiscriminantAnalysis()))
models.append(("LR", LogisticRegression()))
models.append(("NB", GaussianNB()))
models.append(("KNN", KNeighborsClassifier(n_neighbors=5)))
models.append(("DT", DecisionTreeClassifier()))

noisy_models = []
noisy_models.append(("Noisy_SVM", SVC()))
noisy_models.append(('Noisy_LDA', LinearDiscriminantAnalysis()))
noisy_models.append(("Noisy_LR", LogisticRegression()))
noisy_models.append(("Noisy_NB", GaussianNB()))
noisy_models.append(("Noisy_KNN", KNeighborsClassifier(n_neighbors=5)))
noisy_models.append(("Noisy_DT", DecisionTreeClassifier()))


for i in range(len(models)):
    name, model = models[i]
    noisy_name, noisy_model = noisy_models[i]

    clf = model
    noisy_clf = noisy_model

    clf.fit(X_train_pca, y_train)
    noisy_clf.fit(X_train_noisy, y_noisy_train)

    y_pred = clf.predict(X_test_pca)
    y_noisy_pred = clf.predict(X_test_noisy_pca)

    print(10*"=", "{} Result".format(name).upper(), 10*"=")
    print("Accuracy score[normal]:{:0.2f}".format(
        metrics.accuracy_score(y_test, y_pred)))
    print("Accuracy score[noisy ]:{:0.2f}".format(
        metrics.accuracy_score(y_test, y_noisy_pred)))
    print()
        `}
        />

        <Code
          language="text"
          code={`
========== SVM RESULT ==========
Accuracy score[normal]:0.96
Accuracy score[noisy ]:0.94

========== LDA RESULT ==========
Accuracy score[normal]:0.97
Accuracy score[noisy ]:0.96

========== LR RESULT ==========
Accuracy score[normal]:0.94
Accuracy score[noisy ]:0.96

========== NB RESULT ==========
Accuracy score[normal]:0.87
Accuracy score[noisy ]:0.82

========== KNN RESULT ==========
Accuracy score[normal]:0.72
Accuracy score[noisy ]:0.62

========== DT RESULT ==========
Accuracy score[normal]:0.52
Accuracy score[noisy ]:0.53
        `}
        />

        <h2>Applying CNN on PCA and Noisy PCA</h2>

        <p>
          We have applied a CNN model on PCA and Noisy PCA to compare the
          accuracy.
        </p>
        <Image src="./images/graph_cnn.png" />
        <Code
          language="text"
          code={`
CNN Best Accuracy: 0.9416666626930237
CNN_noisy Best Accuracy: 0.949999988079071
`}
        />

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
        <h2>Decrease in accuracy in the model trained with noised images</h2>
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
