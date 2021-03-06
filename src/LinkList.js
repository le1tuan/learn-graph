import React from 'react'
import Link from './components/Link'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class LinkList extends React.Component {
  render() {
    if (this.props.feedQuery && this.props.feedQuery.loading) {
      return <div>Loading</div>
    }
  
    // 2
    if (this.props.feedQuery && this.props.feedQuery.error) {
      return <div>Error</div>
    }
  
    // 3
    const linksToRender = this.props.feedQuery.feed.links
  
    return (
      <div>{linksToRender.map(link => <Link key={link.id} link={link} />)}</div>
    )
  }
}

const FEED_QUERY = gql`
  query FeedQuery {
    feed {
      links {
        id
        description
        url
        createdAt
      }
    }
  }
`

export default graphql(FEED_QUERY, { name: 'feedQuery'}) (LinkList)