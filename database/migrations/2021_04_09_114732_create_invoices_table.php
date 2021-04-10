<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->string('organizationName');
            $table->string('organizationEmail');
            $table->string('organizationLogo');
            $table->foreignId('customer_id')->constrained();
            $table->text('notes')->nullable();
            $table->date('dueDate');
            $table->date('issueDate');
            $table->float('subTotal');
            $table->float('discount')->nullable();
            $table->float('totalAmount');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invoices');
    }
}
