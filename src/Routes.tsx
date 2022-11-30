import React, { lazy } from 'react';

import { useRoutes, useParams } from 'react-router-dom';

import { useView } from "@/client";
import Outline from '@/components/Outline';

const Renderer = lazy(() => import('@/blocks/Renderer'));
const NotFound = lazy(() => import('@/views/NotFound'));

type Router = {
    path: string;
    element: React.ReactElement;
}

const Routes: React.FC = () => {
    const routes: Router[] = [
        { path: '/', element: <Component /> },
        { path: '/:slug', element: <Component /> },
        { path: '/:type/:slug', element: <Component /> }
    ]
    return useRoutes(routes);
}

export default Routes;

const Component: React.FC = () => {
    let { type, slug } = useParams();
    [type, slug] = [type || "assembly", slug || "home"];
    const { content, error } = useView({ type, slug });

    if (error && error.status === 404) {
        return (<NotFound />)
    }

    return (
        <>
            {content && content ?
                <Renderer content={content} />
                :
                <Outline />
            }
        </>
    )
}