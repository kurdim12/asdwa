
import { COMPANY_DATA } from "@/lib/data";
import Link from "next/link";
import { ProjectDetailView } from "@/components/projects/ProjectDetailView";

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata(props: PageProps) {
    const params = await props.params;
    const service = COMPANY_DATA.services.mainServices.find(s => s.id === params.id);
    if (!service) return { title: "Service not found" };
    return { title: service.title.en, description: service.description.en.slice(0, 155) };
}

export async function generateStaticParams() {
    return COMPANY_DATA.services.mainServices.map((service) => ({
        id: service.id,
    }));
}

export default async function ServiceDetail(props: PageProps) {
    const params = await props.params;
    const serviceId = params.id;

    // Find service by ID
    const service = COMPANY_DATA.services.mainServices.find(s => s.id === serviceId);

    if (!service) {
        return (
            <main className="bg-background min-h-screen flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-heading font-bold mb-4">Service Not Found</h1>
                    <Link href="/services" className="text-primary hover:underline">Return to Services</Link>
                </div>
            </main>
        )
    }

    // Adapt Service data to Project interface expected by ProjectDetailView
    // We map 'service' fields to 'project' fields as best as possible to reuse the view.

    // Convert gallery images to string array if they are rich objects, or keep as strings
    let images: string[] = [];
    if (service.gallery && service.gallery.length > 0) {
        // @ts-ignore
        images = service.gallery.map((img: string | { src: string }) => {
            // @ts-ignore
            const src = typeof img === 'string' ? img : img.src;
            return src.startsWith('/') ? src : `/${src}`;
        });
    } else {
        // Fallback or use icon as main image if no gallery
        images.push('/images/logo.jpg');
    }

    // Construct a pseudo-project object
    // @ts-ignore
    const pseudoProject = {
        name: service.id,
        id: service.id, // Added id
        title: service.title,
        description: service.description,
        // We use the first image as the "thumbnail" for the hero background if available
        thumbnail: images.length > 0 ? images[0] : undefined,
        categoryIds: [], // Not really needed for detail view display usually
        categories: [], // Added categories
        categoryNames: [],
        // Store full gallery for the view to use
        images: images
    };

    return (
        <ProjectDetailView
            project={pseudoProject as any}
            categoryName={{ en: "Service", ar: "خدمة" }} // Label as "Service"
            images={images}
        />
    );
}
