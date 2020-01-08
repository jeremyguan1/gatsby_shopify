import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Product from "./Product"
const PRODUCT_LISTING_QUERY = graphql`
  query ProductListing {
    allShopifyProduct {
      edges {
        node {
          id
          title
          images {
            localFile {
              childImageSharp {
                fixed(width: 200) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
          }
          publishedAt(formatString: "YYYY")
          description
          descriptionHtml
          variants {
            sku
            id
            title
            price
          }
        }
      }
    }
  }
`

const ProductsListing = props => {
  const { allShopifyProduct } = useStaticQuery(PRODUCT_LISTING_QUERY)
  console.log(allShopifyProduct)
  return (
    <div>
      {allShopifyProduct.edges.map(edge => (
        <Product product={edge.node} key={edge.node.id} />
      ))}
    </div>
  )
}

export default ProductsListing
