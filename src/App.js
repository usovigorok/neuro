import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchHistoryItems } from './actions'
import './App.css'
import ItemList from './components/ItemList'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchHistoryItems())
  }

  render() {
    const { items, isFetching } = this.props
    const isEmpty = items.length === 0

    return (
      <div className="App">
        {isEmpty
          ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <ItemList items={items} />
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { history, isFetching } = state

  return {
    items: history.items,
    isFetching
  }
}

export default connect(mapStateToProps)(App)
