<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class InvoiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'organizationName' => $this->organizationName,
            'organizationEmail' => $this->organizationEmail,
            'organizationLogo' => $this->organizationLogo,
            'customer' => $this->customer,
            'notes' => $this->notes,
            'dueDate' => $this->dueDate,
            'issueDate' => $this->issueDate,
            'subTotal' => $this->subTotal,
            'discount' => $this->discount,
            'totalAmount' => $this->totalAmount,
            'items' => $this->items,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
