
import './Error.css'
const Error = () => {
    return (
        <section className="flex  items-center h-full  p-16">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8  ">
		<div className="max-w-md text-center   ">
			<h2 className="mb-8 font-extrabold text-9xl  ">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 dark:dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
			<a rel="noopener noreferrer" href="/" className="px-8 py-3 bg-[#023047] font-semibold rounded text-white">Back to homepage</a>
		</div>
	</div>
</section>
    );
};

export default Error;