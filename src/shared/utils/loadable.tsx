import { ComponentType, lazy, ReactElement, ReactNode, Suspense } from 'react';

const loadable = (
	importFunc: Promise<{
		default: ComponentType<any>;
	}>,
	fallback?: ReactElement
): ReactNode => {
	const LazyComponent = lazy(() => importFunc);

	return (
		<Suspense fallback={fallback ?? <></>}>
			<LazyComponent />
		</Suspense>
	);
};

export default loadable;
