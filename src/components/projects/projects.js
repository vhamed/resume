import React from 'react'
import styled from 'styled-components'
import siteConfig from '../../../data/siteConfig'

import Loader from '../loader'

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
      status: 'loading',
    }
  }
  componentDidMount() {
    const repos = siteConfig.projects
    if (repos && repos.length) {
      this.setState({ repos: repos, status: 'ready' })
    }
  }

  render() {
    const { status } = this.state
    return (
      <div className={this.props.className}>
        <h2>Recent Projects</h2>
        {status === 'loading' && (
          <div className="repositories__loader">
            <Loader />
          </div>
        )}
        {status === 'ready' && this.state.repos && (
          <React.Fragment>
            <div className="repositories__content">
              {this.state.repos.map(repo => (
                <React.Fragment key={repo.name}>
                  <div className="repositories__repo">
                    <a className="repositories__repo-link" href={repo.html_url}>
                      <strong>{repo.name}</strong>
                    </a>
                    <div className="repositories__repo-description">
                      <div>{repo.description}</div>
                      <div className="repositories__repo-urls">
                        {repo.url.demo ? (
                          <a href={repo.url.demo} className="repositories__repo-url">
                            Live Demo
                          </a>
                        ) : null}
                        {repo.url.demo ? (
                          <a href={repo.url.code} className="repositories__repo-url">
                            Code
                          </a>
                        ) : null}
                      </div>
                    </div>
                    <div className="repositories__repo-date">
                      Updated: {new Date().toUTCString()}
                    </div>
                  </div>
                  <hr />
                </React.Fragment>
              ))}
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default styled(Projects)`
  position: relative;
  .repositories__content {
    margin-bottom: 40px;
  }

  .repositories__repo {
    position: relative;
  }

  .repositories__repo-link {
    text-decoration: none;
    color: #25303b;
  }

  .repositories__repo-date {
    color: #bbb;
    font-size: 10px;
  }
  .repositories__repo-description {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .repositories__repo-urls {
    width: 30%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .repositories__repo-url {
    color: #000;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    padding-right: 1em;
  }

  .repositories__loader {
    display: flex;
  }

  hr {
    margin-top: 16px;
  }
`
