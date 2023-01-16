import type { Fields } from "../pages/services/types";
import Image from "next/image";

export default function Card(fields: Fields) {
  return (
    <div className="card w-96  shadow-xl">
      <figure>
        <Image
          src={fields.image_couverture.url ?? ""}
          alt="Shoes"
          width={fields.image_couverture.width}
          height={fields.image_couverture.height}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{fields.title}</h2>
        <div
          className="inline-block text-ellipsis line-clamp-3"
          dangerouslySetInnerHTML={{
            __html: fields.description ?? "",
          }}
        />
        <div className="card-actions justify-end">
          <button className="btn-primary btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
