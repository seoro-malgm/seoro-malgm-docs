export default {
  head: {
    title: "default title",
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          name: "온앤오프 | 울산동구 워케이션센터",
          about: [
            { "@type": "Thing", name: "워케이션" },
            { "@type": "Thing", name: "울산" },
            { "@type": "Thing", name: "동구" },
            { "@type": "Thing", name: "일산 해수욕장 워케이션" },
            { "@type": "Thing", name: "2박3일 워케이션" },
            { "@type": "Thing", name: "워케이션센터" },
          ],
          makesOffer: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "워케이션 공간 제공",
                description:
                  "울산 동구에서 제공하는 워케이션 시설의 공식 홈페이지",
              },
            },
          ],
          "@type": "Organization",
          knowsAbout: [
            "워케이션",
            "울산",
            "동구",
            "워케이션센터",
            "울산 2박3일",
            "울산여행",
            "울산동구 워케이션",
          ],
          url: "https://ulsanworkation.com/",
          logo: "https://ulsanworkation.com/logo.png",
          image: "https://ulsanworkation.com/og-image.png",
          description:
            "탁 트인 일산해수욕장의 파노라마 바다뷰로 펼쳐진 온앤오프에서 일, 그 이상의 완전한 몰입을 경험해보세요.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "울산 동구 해수욕장 10길 38 5",
            addressLocality: "울산",
            addressRegion: "UL",
            postalCode: "44057",
            addressCountry: "KR",
          },
          telephone: "+82-52-252-5200",
          openingHours: "Mo-Fr 09:00-18:00",
          datePublished: "2024-06-01",
          dateModified: "2024-06-26",
          sameAs: ["https://www.instagram.com/ulsanworkation"],
        }),
      },
    ],
  },
};
