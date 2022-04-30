import { VFC } from 'react'
import { LocalStateB } from '../components/LocalStateB'
import { Layout } from '../components/Layout'

import React from 'react'

const LocalStatePageB: VFC = () => {
    return (
        <Layout title="Local State A">
            <LocalStateB />
        </Layout>
    )
}

export default LocalStatePageB
